import NavigationBar from './NavigationBar';

export default function Header(): JSX.Element {
  return (
    <header>
      <div>
        Recipes App
      </div>
      <div>
        <NavigationBar />
      </div>
    </header>
  )
}
