import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { injectContentFiles } from "@analogjs/content";

import PostAttributes from "../../post-attributes";

@Component({
  selector: "app-blog",
  imports: [RouterLink],
  template: `
    <h1>Blog Archive</h1>

    @for (post of posts; track post.attributes.slug) {
      <a [routerLink]="['/blog/', post.attributes.slug]">
        <h2 class="">{{ post.attributes.title }}</h2>
        <p class="">{{ post.attributes.description }}</p>
      </a>
    }
  `,
})
export default class Blog {
  readonly posts = injectContentFiles<PostAttributes>();
}
