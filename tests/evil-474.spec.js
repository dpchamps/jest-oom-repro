
  describe("some-evil-spec=474", () => {
    it("evil-block-474", () => {
      window.evil_474 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  