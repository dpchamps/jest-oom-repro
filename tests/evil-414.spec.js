
  describe("some-evil-spec=414", () => {
    it("evil-block-414", () => {
      window.evil_414 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  