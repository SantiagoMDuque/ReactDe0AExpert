import { HeroList } from "../components/HeroList"

export const DcPage = () => {
    return (
      <>
          <h1>DC Comics</h1>
          <br />

          <ul>
            <HeroList publisher={'DC Comics'}/>
          </ul>
      </>
    )
  }
  