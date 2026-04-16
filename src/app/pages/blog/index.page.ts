import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { injectContentFiles } from "@analogjs/content";

import PostAttributes from "../../post-attributes";

@Component({
  selector: "app-blog",
  imports: [RouterLink],
  template: `
    <h1 class="font-bold">Stuff I am learning</h1>

    <ul class="list-disc px-4">
      @for (post of posts; track post.attributes.slug) {
        <li>
          <a [routerLink]="['/blog/', post.attributes.slug]">
            <h2 class="font-bold text-sm">{{ post.attributes.title }}</h2>
          </a>
        </li>
      }
    </ul>
  `,
})
export default class Blog {
  readonly posts = injectContentFiles<PostAttributes>(
    (file) => !file.filename.includes("experience"),
  );
}
