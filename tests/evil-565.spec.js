
  describe("some-evil-spec=565", () => {
    it("evil-block-565", () => {
      window.evil_565 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  