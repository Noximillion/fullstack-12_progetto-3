import { Card } from "./Card";
import { GrAddCircle } from "react-icons/gr";
import { Navbar } from "./Navbar";

export function Homepage() {
  return (
    <div className="bg-primary">
      <button className="fixed bottom-20 right-4 bg-gray-700 rounded-full bg-primary">
        <GrAddCircle size={50} />
      </button>
      <Navbar />
      <header className="flex justify-between w-screen h-12 bg-primary px-1">
        <div className="headerLeft flex flex-col">
          <h1>Logo</h1>
          <h1>Username</h1>
        </div>

        <div className="headerRight">
          <div className="imageContainer bg-contrast2 w-12 h-12 rounded-full"></div>
        </div>
      </header>
      <div>
        <Card
          postImg="https://www.italia.it/content/dam/tdh/en/interests/sicilia/catania/catania/media/20210624132554-cattedrale-di-sant-agata-catania-sicilia-gettyimages-467663396.jpg"
          postDescription="asdbasibfdiufb isucfgnergheriugver adasdsadasda sd a fweef we  ewfewfewewfwefwefwe  wefwefwefewfewf igvneruvghvreng vrehvgnrehvgnehrvugerhi"
        />
        <Card postImg="https://2.bp.blogspot.com/-DhohxTl47IA/U8zw1upZ_SI/AAAAAAAAGE4/KTtFDi7X1Vg/s1600/Aspecto+medieval+de+Sermoneta+-+Foto+www+adfilanesacta+it.jpg" />
        <Card postImg="https://dynamic-media-cdn.tripadvisor.com/media/photo-s/01/2d/5e/f3/fiumefreddo-di-sicilia.jpg?w=600&h=400&s=1" />
      </div>
    </div>
  );
}
