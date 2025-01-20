import "./TagWithClose.css";
import { Typo, typoStyles } from "@/shared/Typo/Typo";

export function TagWithClose({ tag, deleteTag }) {
  return (
    <div className="tag-chips">
      <Typo
        className={`${typoStyles.textLgRegular} section-text`}
        content={`#${tag}`}
      />
      <img
        className="tag-delete-icon"
        src={"/assets/chip_delete_icon.png"}
        onClick={() => deleteTag(tag)}
        alt="태그 삭제 버튼"
      />
    </div>
  );
}
