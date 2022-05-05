
  describe("some-evil-spec=836", () => {
    it("evil-block-836", () => {
      window.evil_836 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  