import { StepProps } from "@/components/items/Step"
import { UserIcon, Mail01Icon, AddTeamIcon, RocketIcon } from "./Icons"

const SidebarMock: Array<StepProps> = [
    {
        icon: <UserIcon/>,
        title: "Inscription",
        description: "Entrez vos informations personnelles."
    },
    {
        icon: <Mail01Icon />,
        title: "Validation OTP",
        description: "Confirmez votre adresse e-mail."
    },
    {
        icon: <AddTeamIcon />,
        title: "Invitez vos amis ",
        description: "Envoyez des invitations à vos amis."
    },
    {
        icon: <RocketIcon />,
        title: "Bienvenu à worketyamo",
        description: "Votre inscription est terminée."
    }
]

export default SidebarMock;