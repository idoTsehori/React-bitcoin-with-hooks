import { Component } from 'react'
import { Chart } from '../cmps/Chart'
import { bitcoinService } from '../services/bitcoin.service'
export class StatisticPage extends Component {
  state = {
    marketPrice: null,
  }

  componentDidMount = async () => {
    // const marketPrice = await bitcoinService.getMarketPrice()
    const marketPrice = bitcoinService.getMarketPrice()
    this.setState({ marketPrice })
  }

  render() {
    const { marketPrice } = this.state
    if (!marketPrice) return <div>Loading...</div>
    return (
      <section>
        <Chart color="blue" data={marketPrice} />
        <Chart color="red" data={marketPrice} />
      </section>
    )
  }
}
