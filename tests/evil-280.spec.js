
  describe("some-evil-spec=280", () => {
    it("evil-block-280", () => {
      window.evil_280 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  