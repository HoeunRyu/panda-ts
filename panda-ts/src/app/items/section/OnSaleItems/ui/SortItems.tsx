import { useResponseSort } from "@/shared/hooks/responseSortHook";
import { ORDER_BY } from "../../../../../utils/APIs/getItemsListAPI";
import { typoStyles } from "@/shared/Typo/Typo";
import { useMediaQuery } from "@/shared/hooks/mediaQueryHook";

//ORDER_BY의 값만 배열로 가져오기
const ORDER_BY_VALUE_ARR = Object.values(ORDER_BY);

export function SortItems({ onSortChange }) {
  const screenSize = useMediaQuery();
  const { selectedName, showDropdown, handleSelectSort, toggleDropdown } =
    useResponseSort(ORDER_BY.RECENT); //초기값은 "최신순"으로 설정

  const dropdownMenuClassName = showDropdown ? "show" : "";
  const sortItemsLabelClassName = screenSize === "MOBILE" ? "mobile" : "";
  const sortItemsIcon =
    screenSize === "MOBILE"
      ? "assets/mobile_sort_icon.png"
      : "assets/sort_icon.png";

  //console.log("선택한 메뉴 이름", selectedName);
  //console.log("선택한 정렬 기준", selectedValue);
  //console.log("--------");

  return (
    <div
      id="sort-items-wrapper"
      className={typoStyles.textLgRegular}
      onClick={toggleDropdown}
    >
      <p className={`sort-items-label ${sortItemsLabelClassName}`}>
        {selectedName}
      </p>
      <img id="dropdown-icon" src={sortItemsIcon} alt="정렬 아이콘" />

      <div className={`dropdown-menu ${dropdownMenuClassName}`}>
        {ORDER_BY_VALUE_ARR.map((item, idx) => (
          <p
            className="dropdown-option"
            onClick={() => {
              handleSelectSort(item);
              onSortChange(item.value); //sort 파라미터 업데이트
            }}
            key={idx}
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
}
