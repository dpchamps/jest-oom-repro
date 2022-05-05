
  describe("some-evil-spec=491", () => {
    it("evil-block-491", () => {
      window.evil_491 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  