import Forms from "./Formulaire";
import ValidationOTP from '@/components/ui-elements/ValidationOTP'
import Invite from '@/components/ui-elements/Invite'
import Welcome from '@/components/ui-elements/Welcome'


interface Iactive {
  active : any
}
function FormSection({active} : Iactive) {

    if(active === 0){
      return(
          <Forms/>
      )
  }
  // if(active === 0){
  //     return(
  //         <CreateAccount/>
  //     )
  // }
  if(active === 1){
      return(
          <ValidationOTP />
      )
  }
  if(active === 2){
      return(
          <Invite />
        )
      }
      if(active === 3){
          return(
              <Welcome/>
          )
      }

}

export default FormSection;
