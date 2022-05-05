
  describe("some-evil-spec=481", () => {
    it("evil-block-481", () => {
      window.evil_481 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  