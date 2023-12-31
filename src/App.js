import './App.css';
import { Fireworks } from '@fireworks-js/react'
import year from './2024.jpg'
function App() {



  return (
    <section className={"container"}>
     <div className="imageWrapper">
        <img src={year} alt="2024"/>
     </div>
      <Fireworks className={"fireworks"}

          options={{
                    opacity: 0.5,
                    explosion: 10,
                    mouse: {
                        click: true,
                        max:2,
                    },
                    hue: {
                        min: 0,
                        max: 360
                    },
                    sound: {
                        enabled:true
                    }
          }}
      />
    </section>
  );
}

export default App;
