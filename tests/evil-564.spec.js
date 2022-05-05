
  describe("some-evil-spec=564", () => {
    it("evil-block-564", () => {
      window.evil_564 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  