
  describe("some-evil-spec=304", () => {
    it("evil-block-304", () => {
      window.evil_304 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  