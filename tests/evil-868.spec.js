
  describe("some-evil-spec=868", () => {
    it("evil-block-868", () => {
      window.evil_868 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  