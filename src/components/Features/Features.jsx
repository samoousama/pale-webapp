import FeatureOne from "./FeatureOne";
import FeatureTwo from "./FeatureTwo";
import FeatureThree from "./FeatureThree";

export default function PaleFeatures(){
  return (
     <div className='py-10 overflow-hidden relative' id="features">
        <div className='container'>
          <FeatureOne />
          <FeatureTwo />
          <FeatureThree />
        </div>
      </div>
  )
}