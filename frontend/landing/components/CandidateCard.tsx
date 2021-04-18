import { Card, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const CandidateCard = () => (
    <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
            <Card.Header>Алексей Меняйло</Card.Header>
            <Card.Meta>
                <span className='date'>Госдума. МСК. ЦАО.</span>
            </Card.Meta>
            <Card.Description>
                Социальный предприниматель, активист.
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user' />
                Нужна помощь по 22 задачам
            </a>
        </Card.Content>
    </Card>
)

export default CandidateCard