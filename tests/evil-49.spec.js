
  describe("some-evil-spec=49", () => {
    it("evil-block-49", () => {
      window.evil_49 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  