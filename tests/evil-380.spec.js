
  describe("some-evil-spec=380", () => {
    it("evil-block-380", () => {
      window.evil_380 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  