import Particles from "react-tsparticles";

const Particle = () => {
  
    return (
        <Particles options={{
            fpsLimit: 60, 
            interactivity: { 
                events: {
                    resize: true
                }
            },
            particles: {
                color: {
                    value: '9fafca'
                },
                number: {
                    density: {
                        enable: true, 
                        area: 1000
                    }, 
                    limit: 0, 
                    value: 150
                },
                opacity: {
                    animation: {
                        enable: true, 
                        minimumValue: 0.05, 
                        speed: 1, 
                        sync:false
                    },
                    random: {
                        enable: true, 
                        minimumValue: 0.05
                    },
                    value: 1
                }, 
                shape: {
                    type: 'char',
                    character: [
                        {
                          fill: true,
                          font: "Verdana",
                          style: "",
                          value: "tsParticles".split(""),
                          weight: "400"
                        },
                        {
                          fill: false,
                          font: "Verdana",
                          style: "",
                          value: "tsParticles".split(""),
                          weight: "400"
                        }
                      ], 
                }, 
                size: {
                    random: {
                        enable: true, 
                        minimumValue: 15
                    }, 
                    value: 1
                }
            }
        }} />
    );

}

export default Particle; 