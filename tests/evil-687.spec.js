
  describe("some-evil-spec=687", () => {
    it("evil-block-687", () => {
      window.evil_687 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  