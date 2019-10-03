import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BarChart}from '@gooddata/react-components';
import {Visualization}from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import {ColumnChart}from '@gooddata/react-components';
import { Table } from '@gooddata/react-components';
import { PivotTable } from '@gooddata/react-components';
import { LineChart } from '@gooddata/react-components';
import { ComboChart, Model } from '@gooddata/react-components';
import { AttributeFilter, ErrorComponent } from "@gooddata/react-components";
import { AFM } from "@gooddata/typings";

export const demoProjectId = "ht3owbpk6h0yfjtkcsgva3osu3z7paol";
export const locationResortUri = `/gdc/md/${demoProjectId}/obj/2206`;
export const totalSalesIdentifier = "aa7ulGyKhIE5";
export const locationResortIdentifier = "label.restaurantlocation.locationresort";
export const dateDatasetUri = "/gdc/md/ht3owbpk6h0yfjtkcsgva3osu3z7paol/obj/2180"



class App extends Component {


  render() {
  

        const totalSales = Model.measure(totalSalesIdentifier)
            .format("#,##0")
            .alias("$ Total Sales");

        const locationResort = Model.attribute(locationResortIdentifier);

		const attributeFilter = Model.negativeAttributeFilter(locationResortIdentifier,["Dallas"],true);
		const dateFiler = Model.absoluteDateFilter(dateDatasetUri,"2016-01-01","2016-12-31");
		
		const measure = [
			{
				measure: {
					localIdentifier: 'm2',
					definition: {
						measureDefinition: {
							item: {
								identifier: "aa7ulGyKhIE5"
							},
							filters:[
								{
									negativeAttributeFilter: {
										displayForm: {
											identifier: "label.restaurantlocation.locationresort"
										},
										notIn: [] 
									}
								}
							]
						}
					}
				}
			}
		];
    return (
      <div className="App">
        <header>
		<div style={{ height: 50 }}></div>
        <div className="s-attribute-filter">
                <ColumnChart
					projectId={demoProjectId}
					measures={measure}
					viewBy={locationResort}
					filters={[dateFiler,attributeFilter]}
				/>
                
            </div>
		
       
        </header>
      </div>
    );
  }
}

export default App;
