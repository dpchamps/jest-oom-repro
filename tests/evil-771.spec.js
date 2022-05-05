
  describe("some-evil-spec=771", () => {
    it("evil-block-771", () => {
      window.evil_771 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  