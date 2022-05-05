
  describe("some-evil-spec=815", () => {
    it("evil-block-815", () => {
      window.evil_815 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  