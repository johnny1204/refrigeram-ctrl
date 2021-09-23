import { FC } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import Counter from '../../containers/molecules/Counter';
import ItemModal from '../../containers/templates/ItemModal';
import { FoodStuff } from '../../data/data';

type Props = {
	stuffs: FoodStuff[][];
};

const Stuffs: FC<Props> = ({ stuffs }) => (
	<>
		<div style={{ margin: 20 }}>
			<ItemModal />
		</div>
		<Grid style={{ margin: 20 }}>
			{stuffs.map((stuff, i) => (
				// eslint-disable-next-line react/no-array-index-key
				<Grid.Row key={i}>
					{stuff.map((value) => (
						<Grid.Column key={value.id} width={8}>
							<Grid columns={2}>
								<Grid.Column>
									<Button
										icon="add to cart"
										color="blue"
										basic
										style={{ marginRight: 15 }}
									/>
									{value.name}
								</Grid.Column>
								<Grid.Column>
									<Counter count={value.stock} />
								</Grid.Column>
							</Grid>
						</Grid.Column>
					))}
				</Grid.Row>
			))}
		</Grid>
	</>
);

export default Stuffs;
