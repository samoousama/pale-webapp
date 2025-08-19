import FeatureOne from "./FeatureOne";
import FeatureTwo from "./FeatureTwo";
import FeatureThree from "./FeatureThree";

export default function PaleFeatures(){
  return (
     <div className='py-10'>
        <div className='container'>
          <FeatureOne />
          <FeatureTwo />
          <FeatureThree />
        </div>
      </div>
  )
}