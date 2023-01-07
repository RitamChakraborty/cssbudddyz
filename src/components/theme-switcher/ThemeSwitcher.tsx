import "./ThemeSwitcher.scss";

export default function ThemeSwitcher() {
    return (
      <div id="ThemeSwitcher">
          <div class="icon light">
              <i class="fa-solid fa-sun"></i>
          </div>
          <div class="icon dark">
              <i class="fa-solid fa-moon"></i>
          </div>
      </div>
    );
}