
  describe("some-evil-spec=610", () => {
    it("evil-block-610", () => {
      window.evil_610 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  