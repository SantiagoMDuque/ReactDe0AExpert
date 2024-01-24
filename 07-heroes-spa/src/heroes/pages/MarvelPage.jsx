import { HeroList } from "../components/HeroList"

export const MarvelPage = () => {
    return (
      <>
          <h1>Marvel Comics</h1>
          <br />

          <ul>
            <HeroList publisher={'Marvel Comics'}/>
          </ul>
      </>
    )
  }
  