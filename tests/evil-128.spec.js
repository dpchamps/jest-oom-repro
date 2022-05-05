
  describe("some-evil-spec=128", () => {
    it("evil-block-128", () => {
      window.evil_128 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  