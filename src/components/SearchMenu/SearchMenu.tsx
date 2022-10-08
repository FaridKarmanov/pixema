import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CloseIcons } from "assets";
import { fetchMoviesByParams } from "store/features";
import { useAppDispatch } from "store/hooks";
import Select from "react-select";
import {
  AttentionMessage,
  Block,
  CloseButton,
  Container,
  FilterForm,
  Footer,
  Header,
  Main,
  selectStyles,
  ShowResultsButton,
  Title,
  Wrapper,
} from "./styles";
import { Input } from "components";
import { FilterValue, IOption } from "types";
import { Color } from "ui";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "routes";

interface IProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

const options: IOption[] = [
  { value: "series", label: "series" },
  { value: "movie", label: "movie" },
  { value: "episode", label: "episode" },
];

export const SearchMenu = ({ setIsOpen, isOpen }: IProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FilterValue>();

  const onSubmit: SubmitHandler<FilterValue> = (info) => {
    dispatch(fetchMoviesByParams(info)).then(() => navigate(ROUTE.HOME));
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Wrapper
          animate={{ x: 0 }}
          initial={{ x: 550 }}
          transition={{ duration: 1 }}
          exit={{ x: 550 }}
        >
          <Container>
            <FilterForm onSubmit={handleSubmit(onSubmit)}>
              <Header>
                <Title>Filters</Title>
                <CloseButton onClick={() => setIsOpen(false)}>
                  <CloseIcons stroke={Color.White} />
                </CloseButton>
              </Header>

              <Main>
                <Block>
                  <Title>Title</Title>
                  <Controller
                    control={control}
                    name="s"
                    rules={{
                      required: "Title is required",
                      pattern: {
                        value: /[A-Za-z]/,
                        message: "Title must contain only letters",
                      },
                    }}
                    render={({ field: { onChange, value } }) => (
                      <Input
                        onChange={onChange}
                        value={value}
                        placeholder="Enter title"
                        type="text"
                      />
                    )}
                  />
                  {errors.s && <AttentionMessage>{errors.s.message?.toString()}</AttentionMessage>}
                </Block>

                <Block>
                  <Title>Genre</Title>
                  <Controller
                    control={control}
                    name="t"
                    render={({ field: { onChange, value } }) => (
                      <Select
                        options={options}
                        isMulti={false}
                        isSearchable={false}
                        defaultValue={options[0]}
                        styles={selectStyles}
                        value={options.find((c) => c.value === value)}
                        onChange={(val) => onChange(val?.value)}
                      />
                    )}
                  />
                </Block>

                <Block>
                  <Title>Year</Title>
                  <Controller
                    control={control}
                    name="y"
                    rules={{
                      required: "Year is required",
                    }}
                    render={({ field: { onChange, value } }) => (
                      <Input
                        onChange={onChange}
                        value={value}
                        placeholder="Enter year"
                        type="number"
                      />
                    )}
                  />
                  {errors.y && <AttentionMessage>{errors.y.message?.toString()}</AttentionMessage>}
                </Block>
              </Main>

              <Footer>
                <ShowResultsButton type="submit">Show results</ShowResultsButton>
              </Footer>
            </FilterForm>
          </Container>
        </Wrapper>
      )}
    </AnimatePresence>
  );
};
