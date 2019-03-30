import Layout from 'modules/layouts/Main';
import ServiceFormView from 'modules/service/ServiceFormView.js'

import $ from 'jquery';
if (typeof window !== 'undefined') {
    window.$ = $;
    window.jQuery = $;
}
const Service = (props) => (
    <Layout>
        <ServiceFormView data={props.data} />
    </Layout>
)

Service.getInitialProps = async function (context) {
    const { id } = context.query
    console.log('Service>>>>', id);

    const res = await axios(`${Config.API_URL}pageservice/get_service_detail`, { params: { routes: id } })
    const { Data } = await res.data
    return { data: Data && Data[0] || {} }
}

export default Service
