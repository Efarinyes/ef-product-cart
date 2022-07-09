import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';


describe('ProductImage', () => {
    test('Ha de mostrar el component de manera correcta i amn la imatge personalitzada', () => {
        const wrapper = renderer.create(
            <ProductImage img="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Ha de mostrar el prodicte amb imatgecorrectament', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})