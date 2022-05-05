
  describe("some-evil-spec=116", () => {
    it("evil-block-116", () => {
      window.evil_116 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  