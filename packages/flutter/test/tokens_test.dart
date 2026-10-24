import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:opennavo_design/opennavo_design.dart';

void main() {
  test('dark and light card surfaces match the tokens', () {
    expect(OnColors.dark.surfaceCard, const Color(0xFF1A1A1A));
    expect(OnColors.light.surfaceCard, const Color(0xFFFFFFFF));
    expect(OnColors.light.borderSubtle, const Color(0x14000000));
  });

  test('scales match the tokens', () {
    expect(OnSpace.s4, 16);
    expect(OnSpace.s0_5, 2);
    expect(OnRadius.standard, 10);
    expect(OnTypography.title1.fontSize, 28);
    expect(OnMotion.fast, const Duration(milliseconds: 120));
  });

  testWidgets('OnColors.of follows the theme brightness', (tester) async {
    late OnColors resolved;
    await tester.pumpWidget(
      MaterialApp(
        theme: onThemeData(Brightness.light),
        home: Builder(
          builder: (context) {
            resolved = OnColors.of(context);
            return const SizedBox();
          },
        ),
      ),
    );
    expect(resolved.surfaceBase, OnColors.light.surfaceBase);
  });

  test('lerp blends between themes', () {
    final middle = OnColors.dark.lerp(OnColors.light, 0.5);
    expect(middle.surfaceCard, Color.lerp(OnColors.dark.surfaceCard, OnColors.light.surfaceCard, 0.5));
  });
}
