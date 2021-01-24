import { Component, OnInit } from "@angular/core";
import { Well } from "../../Models/Well.model";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"],
})
export class LandingPageComponent implements OnInit {
  wells: Array<Well> = [];

  constructor() {
    this.wells.push(
      new Well(
        "Collaborate",
        "Share your data with the community",
        true,
        "../../assets/collaborate.svg",
        "Join us",
        "sign-up"
      )
    );
    this.wells.push(
      new Well(
        "Build Faster",
        "Stop wasting time. Search among our database, meet other developers eager to share their data, in a consumable fashion way!",
        false,
        "../../assets/application.svg"
      )
    );

    this.wells.push(
      new Well(
        "Stop wasting searching data from unreliable sources",
        "Have it all, one place, on common goal",
        false,
        "../../assets/search_engines.svg"
      )
    );
  }

  ngOnInit(): void {}
}
