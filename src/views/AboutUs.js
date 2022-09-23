import data from '../info/info_about_us.json';
import {Card,
    CardText,
    CardTitle
    } from 'reactstrap';

export function InfoAboutUs(){
    return(<>
            <Card 
            color="primary"
            style={{
            width: '80'
             }}>
            <CardTitle tag="h5">
            {data.quienessomos.title}
             </CardTitle>
             <CardText>
             {data.quienessomos.paragraphs[0]}
            </CardText>
            </Card>  
        </>);
};