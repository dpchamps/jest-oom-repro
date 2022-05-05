
  describe("some-evil-spec=420", () => {
    it("evil-block-420", () => {
      window.evil_420 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  