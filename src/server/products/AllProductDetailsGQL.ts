import fetch from 'node-fetch';
import { constants } from '../../data/constants';
import { bearer_token_cc } from '../..';

export class AllProductDetailsGQL {
    projectKey: string;
    graphqlEndpoint: string;

    constructor() {
        this.projectKey = constants.projectKey;
        this.graphqlEndpoint = `https://api.commercetools.com/${this.projectKey}/graphql`;
    }

    async getProductDetails(productId: string) {
        const query = `
      query {
        product(id: "${productId}") {
          masterData {
            current {
              name(locale: "en")
              description(locale: "en")
              categories{
                id
              }
              allVariants {
                attributesRaw {
                  name
                  value
                }
                images {
                  url
                  label
                }
                prices {
                  discounted {
                    value {
                        centAmount
                        currencyCode
                      }
                    }
                  value {
                    centAmount
                    currencyCode
                }
              }
              
              }
            }
          }
        }
      }
    `;

        try {
            const response = await fetch(this.graphqlEndpoint, {
                method: 'POST',
                headers: { Authorization: `Bearer ${await bearer_token_cc}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({ query }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            return data.data.product.masterData.current;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}
