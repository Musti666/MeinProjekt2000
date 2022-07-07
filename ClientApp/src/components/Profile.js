import React, {Component} from 'react';
import {
    Button,
    Avatar,
    Image,
    Progress,
    PageHeader,
    Tag,
    Statistic,
    Descriptions,
    Row,
    Timeline,
    Layout,
    Menu,
    Breadcrumb,
    Input
} from "antd";
import {
    MinusOutlined,
    PlusOutlined,
    ClockCircleOutlined,
    UserOutlined,
    LaptopOutlined, 
    NotificationOutlined
} from '@ant-design/icons';

//Menu
const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});
//Menu ende
    export default class extends Component {
        
        state = {
            counter: 0,
            //Percantage
            percent: 0,
            editing:false
        }
//Percentage
        increase = () => {
            let percent = this.state.percent + 10;
            if (percent > 100) {
                percent = 100;
            }
            this.setState({percent});
        };
//Percentage
        decline = () => {
            let percent = this.state.percent - 10;
            if (percent < 0) {
                percent = 0;
            }
            this.setState({percent});
        };

        componentDidMount() {
            //passiert wenn der component das erste mal gerendert wird
        }

        //Percentage
        handleIncrement = () => {
            this.setState({
                counter: this.state.counter + 1
            });
        }
        //MENUE LISTE
        // <Button onClick={this.handleIncrement} type="primary">Primary Button</Button>

        render() {
            const {counter} = this.state;

            return <div>

                <PageHeader
                    onBack={() => window.history.back()}
                    title="Homepage"
                    tags={<Tag color="green">Active</Tag>}
                    subTitle="Profil"
                    extra={[
                        <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{width: 32}}/>}/>,
                        !this.state.editing ? 
                            <Button key="3" onClick={() => this.setState({editing:true})}>Bearbeiten</Button> :
                            <Button key={3} onClick={() => this.setState({editing:false})}>Speichern</Button>,
                        <Button key="1" type="primary">
                            More
                        </Button>,
                    ]}
                >
                    <Descriptions size="small" column={3}>
                        <Descriptions.Item label="Name">{this.state.editing ? <Input /> : "Lili Qu"}</Descriptions.Item>
                        <Descriptions.Item label="Age">
                            {this.state.editing ? <Input /> : "21"}
                        </Descriptions.Item>
                        <Descriptions.Item label="Housing conditions">{this.state.editing ? <Input /> : "Enough"}</Descriptions.Item>
                        <Descriptions.Item label="Animal work experience">{this.state.editing ? <Input /> : "20 year"}</Descriptions.Item>
                        <Descriptions.Item label="Address">
                            {this.state.editing ? <Input /> : "Vienna 1200, Dresdner Straße 67a"}
                        </Descriptions.Item>
                    </Descriptions>
                    <Row>
                        <Statistic title="Status" value="Online"/>
                        <Statistic
                            title="Hobby"
                            value="Basketball"
                            style={{
                                margin: '0 32px',
                            }}
                        />
                        <Statistic title="Animals" value="Dog, cat and monkey"/>
                    </Row>

                </PageHeader>
                <Timeline>
                    <Timeline.Item>
                        {this.state.editing ? <Input /> : "Owned dog 2015-02-01"}
                    </Timeline.Item>
                    <Timeline.Item>
                        {this.state.editing ? <Input /> : "Owned monkey 2015-08-01"}
                    </Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon"/>} color="red">
                        
                        {this.state.editing ? <Input /> : "Wants a cat"}
                    </Timeline.Item>
                    <Timeline.Item>
                        {this.state.editing ? <Input /> : "cant get a cat 2015-09-02"}
                    </Timeline.Item>
                </Timeline>
                <Progress strokeLinecap="square" percent={75}/><p>Please complete your Profile:</p>
                <Progress strokeLinecap="square" type="circle" percent={75}/>
                
            </div>
        }
    }
