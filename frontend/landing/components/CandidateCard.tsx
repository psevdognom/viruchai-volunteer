import { Card, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {Candidate} from "../interfaces/interfaces";

interface Props {
    candidate: Candidate
}

const CandidateCard = ({candidate}: Props) => (
    <Card>
        <Image src={candidate.photo} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{candidate.name}</Card.Header>
            <Card.Meta>
                <span className='date'>{candidate.district}</span>
            </Card.Meta>
            <Card.Description>
                {candidate.desc}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user' />
                Нужна помощь по {candidate.taskCount} задачам
            </a>
        </Card.Content>
    </Card>
)

export default CandidateCard