
  describe("some-evil-spec=243", () => {
    it("evil-block-243", () => {
      window.evil_243 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  