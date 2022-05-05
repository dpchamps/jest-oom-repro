
  describe("some-evil-spec=899", () => {
    it("evil-block-899", () => {
      window.evil_899 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  