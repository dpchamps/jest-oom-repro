
  describe("some-evil-spec=670", () => {
    it("evil-block-670", () => {
      window.evil_670 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  