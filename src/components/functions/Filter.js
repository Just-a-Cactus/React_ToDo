import Button from "../UI/atoms/Button";

const FilterHook = (onButtonClick, buttons) => {
  let key = 1;

  return buttons.map((button) => (
    <Button
      type={"button"}
      key={key++}
      name={button.name}
      onClick={onButtonClick}
      isActive={button.active}
    >
      {button.label}
    </Button>
  ));
};

export default FilterHook;
