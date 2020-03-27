import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const menu = [
  {
    title: "Sorularim",
    link: "#"
  },
  {
    title: "Bildirimler",
    link: "#"
  },
  {
    title: "Favori Kurslarim",
    link: "#"
  },
  {
    title: "Çıkış Yap",
    link: "#"
  }
];

export default function ProfileMenu() {
  return (
    <UncontrolledDropdown style={{ marginTop: "10px" }}>
      <DropdownToggle color="primary" caret>
        Hesabım
      </DropdownToggle>
      <DropdownMenu>
        {menu.map(menuItem => (
          <DropdownItem>{menuItem.title}</DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}
